
import { GeneralErrors } from "@/factories/errors";
import { dbConnect } from "../databases/config";
import Product from "../models/productsModel";
import { MongoFactoryServices } from "../services/mongoFactory";
import { ProductResponses } from "@/factories/success";


export async function GET(req) {
    await dbConnect();

    const defaultLimit = 10;
    const defaultPages = 1;
    
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit")) || defaultLimit;
    const page = parseInt(searchParams.get("page")) || defaultPages;
    const search = searchParams.get("search") || "";

    const skip = (page - 1) * limit;

    const query = search
        ? {
            $or: [
                { name: { $regex: search, $options: "i" } },
                { code: { $regex: search, $options: "i" } },
            ],
        }
        : {};

    const { success, error, response } = await MongoFactoryServices.findAll({
        model: Product,
        query,
        options: { skip, limit },
    });

    if (!success) {
        return GeneralErrors.internalServerErr({ customMessage: error });
    }

    const { products, total } = response;

    return ProductResponses.productsFetchedSuccessfully({
        products,
        pagination: { total, currentPage: page, totalPages: Math.ceil(total / limit) },
    });
}

