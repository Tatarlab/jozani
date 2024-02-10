export const getChallengeTitle = (isEditable = false, name?: string) => (isEditable
  ? 'Create a new challenge'
  : (name || 'Challenge'));