// FormStage
// for previous button
export const selectCurrentStage = state => state.pet.FormStage; 

// OptionForm
export const selectCategory = state => state.pet.OptionForm.category;

// DataForm 
export const selectName = state => state.pet.DataForm.name;
export const selectBirthday = state => state.pet.DataForm.birthday;
export const selectbreed = state => state.pet.DataForm.breed;

// MoreInfoForm 
export const selectAvatarURL = state => state.pet.MoreInfoForm.imgUrl;
export const selectComment = state => state.pet.MoreInfoForm.text;

// PetData
export const selectAllPetData = state => state.pet;