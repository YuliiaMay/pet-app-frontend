// FormStage
// for previous button
export const selectCurrentStage = state => state.pet.FormStage; 


// OptionForm
export const selectCategory = state => state.pet.OptionForm.category;


// DetailsForm 
export const selectName = state => state.pet.DataForm.name;
export const selectBirthday = state => state.pet.DataForm.birthday;
export const selectBreed = state => state.pet.DataForm.breed;
export const selectTitle = state => state.pet.DataForm.title;
export const selectType = state => state.pet.DataForm.type;


// MoreInfoForm 
export const selectSex = state => state.pet.MoreInfoForm.sex;
export const selectAvatarURL = state => state.pet.MoreInfoForm.imgUrl;
export const selectComment = state => state.pet.MoreInfoForm.text;
export const selectLocation = state => state.pet.MoreInfoForm.location;
export const selectPrice = state => state.pet.MoreInfoForm.price;


// PetData
export const selectAllPetData = state => state.pet;