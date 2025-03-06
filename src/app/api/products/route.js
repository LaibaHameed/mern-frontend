import { GeneralErrors } from "@/factories/errors";
import { dbConnect } from "../databases/config";
import { ProductsModel } from "../models";
import { MongoFactoryServices } from "../services/mongoFactory";
import { ProductResponses } from "@/factories/success";

export async function GET() {
  await dbConnect();

  const {success, error, response: products} = await MongoFactoryServices.getAll({model:ProductsModel});

  if(!success) return GeneralErrors.internalServerErr({customMessage : {customMessage: error}});

  return ProductResponses.productsFetchedSuccessfully({products})
}
