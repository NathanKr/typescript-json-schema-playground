import {
  SubCategoryAdvanced,
  SubCategoryBasic,
  SubCategoryJavaScript,
} from "../logic/enums";

// --- this relate at first to quiz and quiz item but later maybe also to answer \ question
export default interface ICategories {
  // -- key must be same as MainCategory !!!!!!!!!!
  // -- value are unique enum values (map)
  JavaScript?: SubCategoryJavaScript [] ; 
  Basic?: SubCategoryBasic [];
  // Routing?: []; // currently no sub categories , i am getting error from ajv so remark
  // Performance?: []; // currently no sub categories , i am getting error from ajv so remark
  Advanced?: SubCategoryAdvanced [];
  // Testing?: []; // currently no sub categories , i am getting error from ajv so remark
  // Design?: []; // currently no sub categories , i am getting error from ajv so remark
}
