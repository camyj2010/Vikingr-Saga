import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.URI_MONGO || 'mongodb+srv://admin:123@cluster0.kmeb4cy.mongodb.net/vikirg_saga?retryWrites=true&w=majority');
    console.log("db conectada");
} catch (error) {
    console.log("nop" + error);
}