// FormStage
// for previous button
export const selectCurrentStage = state => state.FormStage; 

// OptionForm
export const selectCategory = state => state.OptionForm.category;

// DataForm 
export const selectName = state => state.DataForm.name;
export const selectBirthday = state => state.DataForm.birthday;
export const selectbreed = state => state.DataForm.breed;

// MoreInfoForm 
export const selectAvatarURL = state => state.MoreInfoForm.imgUrl;
export const selectComment = state => state.MoreInfoForm.text;
