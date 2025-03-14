import Product from "../../models/productsModel";
import { dbConnect } from "../../databases/config";
import { ProductResponses } from "@/factories/success";
import { MongoFactoryServices } from "../../services/mongoFactory";
import { GeneralErrors, ProductsErrors } from "@/factories/errors";

export async function GET(req, { params }) {
    await dbConnect();

    const { productId } = await params;

    if (!productId) {
        return GeneralErrors.badRequestErr({ customMessage: "Product ID is required" });
    }

    const { success, error, response } = await MongoFactoryServices.findOne({
        model: Product,
        query: { _id: productId },
    });

    if (error || !response) {
        return ProductsErrors.notFound({ customMessage: error || "Product not found" });
    }

    return ProductResponses.productFetchedSuccessfully({ product: response });
}
