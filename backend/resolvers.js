const Store = require("./StoreModel");

//Resolvers
const resolvers = {
  Mutation: {
    //get all data into list form according to page and numer of limits per page
    getStore: async (parent, args, context, info) => {
      const { page, limit } = args;
      const pageNo = page * 1 || 1;
      //create Limit Number in per page
      const limitNo = limit * 1 || 100;
      //skip number of pages
      const skip = (pageNo - 1) * limit;
      //get all data accordingto our requirments
      const data = await Store.find().skip(skip).limit(limitNo);

      return data;
    },
    //Create Store Item Data with item type,title,description,authorName,language, price, quantity
    createStore: async (parent, args, context, info) => {
      const {
        type,
        title,
        description,
        authorName,
        language,
        price,
        quantity,
        image,
      } = args.post;
      //save all data
      const store = await new Store({
        type,
        title,
        description,
        authorName,
        language,
        price,
        quantity,
        image,
      }).save();
      return store;
    },
    //UPdate item data using graphQl and mongoose
    updateStore: async (parent, args, context, info) => {
      const { id } = args;
      const {
        type,
        title,
        description,
        authorName,
        language,
        price,
        quantity,
        image,
      } = args.post;
      //findByIdAndUpdate is monggose function which find specific id and update item
      const post = await Store.findByIdAndUpdate(
        id,
        {
          type,
          title,
          description,
          authorName,
          language,
          price,
          quantity,
          image,
        },
        { new: true },
      );
      return post;
    },
    //Delete store item with findByIdandDelete
    deleteStore: async (parent, args, context, info) => {
      const { id } = args;
      await Store.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
