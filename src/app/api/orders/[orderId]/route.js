import { OrdersModel } from '../../models';
import { dbConnect } from '../../databases/config';
import { OrderResponses } from '@/factories/success';
import { MongoFactoryServices } from '../../services/mongoFactory';
import { GeneralErrors, OrdersErrors } from '@/factories/errors';

export async function PATCH(req, { params }) {
    await dbConnect();

    const { orderId } = await params;

    if (!orderId) {
        return GeneralErrors.badRequestErr({
            customMessage: 'Order ID is required',
        });
    }

    const updateData = await req.json(); 

    const { error, response: updatedOrder } = await MongoFactoryServices.updateById({
        model: OrdersModel,
        id: orderId,
        updateData,
    });

    if (error) {
        return GeneralErrors.serverErr({
            customMessage: 'Failed to update Order',
        });
    }

    if (!updatedOrder) {
        return OrdersErrors.orderUpdationFailed();
    }

    return OrderResponses.orderUpdatedSuccessfully({ order: updatedOrder });
}
