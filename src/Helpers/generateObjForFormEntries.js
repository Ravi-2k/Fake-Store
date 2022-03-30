export default function generateObject(formFieldDetails) {
  const obj = {};

  formFieldDetails.forEach((fieldDetail) => {
    obj[fieldDetail.fieldId] = fieldDetail.defaultValue;
  });

  return obj;
}
