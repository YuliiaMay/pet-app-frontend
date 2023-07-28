// FormStage
// for previous button
export const selectCurrentStage = state => state.pet.FormStage; 


// OptionForm
export const selectCategory = state => state.pet.OptionForm.category;


// DetailsForm 
export const selectName = state => state.pet.DetailsForm.name;
export const selectBirthday = state => state.pet.DetailsForm.birthday;
export const selectBreed = state => state.pet.DetailsForm.breed;
export const selectTitle = state => state.pet.DetailsForm.title;
export const selectType = state => state.pet.DetailsForm.type;


// MoreInfoForm 
export const selectSex = state => state.pet.MoreInfoForm.sex;
export const selectAvatarURL = state => state.pet.MoreInfoForm.avatar;
export const selectComments = state => state.pet.MoreInfoForm.comments;
export const selectLocation = state => state.pet.MoreInfoForm.location;
export const selectPrice = state => state.pet.MoreInfoForm.price;


// PetData
export const selectAllPetData = state => state.pet;