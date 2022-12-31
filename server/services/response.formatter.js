export class Formatter {
   static success(message, data) {
      return {
         status: "true",
         message,
         data,
      };
   }

   static error(message, error) {
      return {
         status: "false",
         message,
         error,
      };
   }
}

export const AuthenticationError = {
   AuthenticationErr: {
      name: "AuthenticationError",
      message: "Failed to authenticate",
   },
   SignUpFailure: {
      name: "SignUpFailure",
      message: "Not authorized to sign up",
   },
   EmailPasswordRequired: {
      name: "EmailPasswordRequired",
      message: "Email or password is required to authenticate",
   },
   SignUpError: {
      name: "SignUpError",
      message: "Failed to sign up the user",
   },
};

export const AuthenticationSuccess = {
   AuthenticationSuccess: {
      name: "AuthenticationSuccess",
      message: "Authenticated Successfully",
   },
   SignUpSuccess: {
      name: "SignUpSuccess",
      message: "Successfully signed up the user",
   },
};

export const Error = {
   PatientDeleteError: {
      name: "PatientDeleteError",
      message: "Failed to delete patient.",
   },
   AuthorizationError: {
      name: "AuthorizationError",
      message: "Auth Failed (Unauthorized)!!",
   },
   JWTExpirationError: {
      name: "TokenExpiredError",
      message: "Token expired !! Please login again to continue.",
   },
   CategoryTitleNotNull: {
      name: "CategoryTitleNotNull",
      message: "Category or sub-category title cannot be null or empty.",
   },
   PresetNotFound: {
      name: "PresetNotFound",
      message: "No preset found with similar id.",
   },
   ParentCategoryNotFound: {
      name: "ParentCategoryNotFound",
      message: "No parent category found for given id.",
   },
   ParentIdAndCategoryIdSameError: {
      name: "ParentIdAndCategoryIdSameError",
      message: "Parent Id and category ID cannot be same.",
   },
   FavouriteNotFound: {
      name: "FavouriteNotFound",
      message: "No favourite product found with similar id.",
   },
   FavouriteNotFoundForUser: {
      name: "FavouriteNotFoundForUser",
      message: "No favourite product found for the user.",
   },
   FavouritesFetchError: {
      name: "FavouritesFetchError",
      message: "Failed to fetch favourite for the user.",
   },
   SimilarCategoryExistsError: {
      name: "SimilarCategoryExistsError",
      message: "Similar category already exists on database.",
   },
   SubCategoryNotSameAsCategoryName: {
      name: "SubCategoryNotSameAsCategoryName",
      message: "Sub category name cannot be similar as category name.",
   },
   CategoryNameNotFoundError: {
      name: "CategoryNameNotFOundError",
      message: "No categories with similar id or category name found.",
   },
   CategoryIdNotFoundError: {
      name: "CategoryNameNotFOundError",
      message: "No categories with similar id found.",
   },
   CategoryUpdateError: {
      name: "CategoryUpdateError",
      message: "Error while updating the category.",
   },
   UserIdAndProductrequiredError: {
      name: "UserIdAndProductrequiredError",
      message: "Product Id and User Id is required to add favourites.",
   },
   AddFavouritesError: {
      name: "AddFavouritesError",
      message: "Error adding favourites.",
   },
   AddFeaturedError: {
      name: "AddFeaturedError",
      message: "Error adding or removing featured product.",
   },
   ClearFavouritesError: {
      name: "ClearFavouritesError",
      message: "Error while removing the product from favourites.",
   },
   FavouritesAlreadyAdded: {
      name: "FavouritesAlreadyAdded",
      message: "Already added favourites for the user.",
   },
   CategoryInsertError: {
      name: "CategoryInsertError",
      message: "Failed to create category",
   },
   CategoryFindError: {
      name: "CategoryFindError",
      message: "Category not found",
   },
   CategoryDeleteError: {
      name: "CategoryDeleteError",
      message: "Failed to Delete Category",
   },
   CategoryNotFound: {
      name: "CategoryNotFound",
      message: "No category found.",
   },
   UserNotFound: {
      name: "UserNotFound",
      message: "No User found.",
   },
   NoSubCategoriesPresentError: {
      name: "NoSubCategoriesPresentError",
      message: "No sub categories found for the category.",
   },
};

export const Success = {
   PatientDeleteSuccess: {
      name: "PatientDeleteSuccess",
      message: "Successfully Deleted patient.",
   },
   AuthorizationError: {
      name: "AuthorizationError",
      message: "Auth Failed (Unauthorized)!!",
   },
   JWTExpirationError: {
      name: "TokenExpiredError",
      message: "Token expired !! Please login again to continue.",
   },
   CategoryTitleNotNull: {
      name: "CategoryTitleNotNull",
      message: "Category or sub-category title cannot be null or empty.",
   },
   PresetNotFound: {
      name: "PresetNotFound",
      message: "No preset found with similar id.",
   },
   ParentCategoryNotFound: {
      name: "ParentCategoryNotFound",
      message: "No parent category found for given id.",
   },
   ParentIdAndCategoryIdSameError: {
      name: "ParentIdAndCategoryIdSameError",
      message: "Parent Id and category ID cannot be same.",
   },
   FavouriteNotFound: {
      name: "FavouriteNotFound",
      message: "No favourite product found with similar id.",
   },
   FavouriteNotFoundForUser: {
      name: "FavouriteNotFoundForUser",
      message: "No favourite product found for the user.",
   },
   FavouritesFetchError: {
      name: "FavouritesFetchError",
      message: "Failed to fetch favourite for the user.",
   },
   SimilarCategoryExistsError: {
      name: "SimilarCategoryExistsError",
      message: "Similar category already exists on database.",
   },
   SubCategoryNotSameAsCategoryName: {
      name: "SubCategoryNotSameAsCategoryName",
      message: "Sub category name cannot be similar as category name.",
   },
   CategoryNameNotFoundError: {
      name: "CategoryNameNotFOundError",
      message: "No categories with similar id or category name found.",
   },
   CategoryIdNotFoundError: {
      name: "CategoryNameNotFOundError",
      message: "No categories with similar id found.",
   },
   CategoryUpdateError: {
      name: "CategoryUpdateError",
      message: "Error while updating the category.",
   },
   UserIdAndProductrequiredError: {
      name: "UserIdAndProductrequiredError",
      message: "Product Id and User Id is required to add favourites.",
   },
   AddFavouritesError: {
      name: "AddFavouritesError",
      message: "Error adding favourites.",
   },
   AddFeaturedError: {
      name: "AddFeaturedError",
      message: "Error adding or removing featured product.",
   },
   ClearFavouritesError: {
      name: "ClearFavouritesError",
      message: "Error while removing the product from favourites.",
   },
   FavouritesAlreadyAdded: {
      name: "FavouritesAlreadyAdded",
      message: "Already added favourites for the user.",
   },
   CategoryInsertError: {
      name: "CategoryInsertError",
      message: "Failed to create category",
   },
   CategoryFindError: {
      name: "CategoryFindError",
      message: "Category not found",
   },
   CategoryDeleteError: {
      name: "CategoryDeleteError",
      message: "Failed to Delete Category",
   },
   CategoryNotFound: {
      name: "CategoryNotFound",
      message: "No category found.",
   },
   UserNotFound: {
      name: "UserNotFound",
      message: "No User found.",
   },
   NoSubCategoriesPresentError: {
      name: "NoSubCategoriesPresentError",
      message: "No sub categories found for the category.",
   },
};

