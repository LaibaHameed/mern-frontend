
import { GeneralErrors } from "@/factories/errors";
import { dbConnect } from "../databases/config";
import Product from "../models/productsModel";
import { MongoFactoryServices } from "../services/mongoFactory";
import { ProductResponses } from "@/factories/success";


export async function GET(req) {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get('limit')) || 10;
    const page = parseInt(searchParams.get('page')) || 1;
    const skip = (page - 1) * limit;


    const { success: countSuccess, error: countError, response: total } = await MongoFactoryServices.count({ model: Product, query: {} });
    if (!countSuccess) return GeneralErrors.internalServerErr({ customMessage: countError });

    const { success, error, response: products } = await MongoFactoryServices.getAll({ model: Product, query: {}, options: { skip, limit } });
    if (!success) return GeneralErrors.internalServerErr({ customMessage: { customMessage: error } });

    return ProductResponses.productsFetchedSuccessfully({
        products,
        pagination: { total, currentPage: page, totalPages: Math.ceil(total / limit) },
    });
}
