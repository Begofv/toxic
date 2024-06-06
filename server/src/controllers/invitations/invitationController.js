import invitationModel from "../../models/invitationModel.js";
import categoryController from "../category/categoryController.js";
import userController from "../user/userController.js";
const getAll = async (userId = null) => {
    try {
        if (!userId) {
            const invitations = await invitationModel.find();
            return invitations;
        }
        const sentInvitations = await invitationModel.find({from:userId});
        const receivedInvitations = await invitationModel.find({to:userId});
        await Promise.all(sentInvitations.map(async (invitation) => {
            await invitation.populate({
                path:"from",
                select: { username:1, email:1, role:1 }
            });
            await invitation.populate({
                path:"to",
                select: { username:1, email:1, role:1 }
            });
            return invitation;
        }))
        await Promise.all(receivedInvitations.map(async (invitation) => {
            await invitation.populate({
                path:"from",
                select: { username:1, email:1, role:1 }
            });
            await invitation.populate({
                path:"to",
                select: { username:1, email:1, role:1 }
            });
            return invitation;
        }))
        const userinvitations = {
            sent: sentInvitations,
            received: receivedInvitations
        }
        return userinvitations;
    } catch (error) {
        console.error(error);
        return [];
    }
}
const getById = async (id) => {
    try {
        const invitation = await invitationModel.findById(id);
        if (!invitation) {
            return null;
        }
        return invitation;
    } catch (error) {
        console.error(error);
        return null;

    }
}

const create = async (data) => {
    try {
        const userFrom = await userController.getById(data.from);
        const userTo = await userController.getById(data.to);
        const category = await categoryController.getById(data.category);
        if (!userFrom || !userTo || !category) {
            return null;
        }
        // if from not in category or to in category
        if (!category.users.find(u => u.equals(userFrom._id)) || category.users.find(u => u.equals(userTo._id))) {
            console.log("from not in category or to in category");
            return null;
        }
        // if already exists an invitation with the same category and to retun
       const oldInvitation = await invitationModel.findOne({category:data.category,to:data.to});
       if(oldInvitation){
           return null;
       }
        const invitation = await invitationModel.create(data);
        return invitation;
    } catch (error) {
        console.error(error);
        return null;
    }
}

const acceptInvitation = async (id,to) => {
    try {
        const invitation = await invitationModel.findById(id);
        const invitationTo = invitation.to;
        if (!invitationTo.equals(to)) {
            return null;
        }
        const category = await categoryController.getById(invitation.category);
        categoryController.addUser(category, invitation.to);
        await invitationModel.findByIdAndDelete(id);
        return invitation;
    } catch (error) {
        console.error(error);
        return null;
    }
}
const rejectInvitation = async (id) => {
    try {
        const invitation = await invitationModel.findByIdAndDelete(id);
        return invitation;
    } catch (error) {
        console.error(error);
        return null;
    }
}


const remove = async (id) => {
    try {
        const invitation = await invitationModel.findByIdAndDelete(id);
        return invitation;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export const functions = {
    getAll,
    getById,
    create,
    remove,
    acceptInvitation,
    rejectInvitation
}

export default functions;