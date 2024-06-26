import Student from "#models/student/stdPersonal";
import databaseError from "#error/database";

export async function createStudent(
  uid,
  title,
  firstName,
  middleName,
  motherName,
  gender,
  dob,
  age,
  birthPlace,
  nationality,
  motherTongue,
  domicileState,
  religion,
  castCategory,
  maharashtraKarnatakaBorderCandidate,
  castDescription,
  subCasteDescription,
  nonCreamyLayerCertificateAttached,
  hobby,
  passportNo,
  bloodGroup,
  physicallyHandicapped,
  studentMobNo,
  studentMail,
  parentMobNo,
  parentMail,
  perAddrDescr,
  perPlotNo,
  perStreetName,
  perStuAddr1,
  perStuAddr2,
  city,
  percellphone,
  perpincode,
  perresiphone,
  permailaddress,
  country,
  state,
  district,
  tahsil,
  correspondanceAddrDescr,
  correspondancePlotNo,
  correspondanceStreetName,
  correspondanceStuAddr1,
  correspondanceStuAddr2,
  correspondanceCity,
  correspondanceCellPhone,
  correspondancePincode,
  correspondanceResiPhone,
  correspondanceMailAddress,
  correspondanceCountry,
  correspondanceState,
  correspondanceDistrict,
  correspondanceTahsil,
  fatherDetails,
  fathersOccupation,
  parentsFirstName,
  parentsMiddleName,
  parentsLastName,
  guardianMobNo,
  guardianMailId,
  nameAsPerTc,
  casteAsPerTc,
  birthStatus,
  maritalStatus,
  panCardNo,
  passportExpiry,
  drivingLicNo,
  drivingLicValidTo,
  aadharCardNo,
  electionCardNo,
  motherMobNo,
  motherEmailId,
  parentIncome,
  photoUploaded,
  signUploaded,
  thumbUploaded,
  noOfDocumentsUploaded,
) {
  const newStudent = await Student.create({
    uid,
    title,
    firstName,
    middleName,
    motherName,
    gender,
    dob,
    age,
    birthPlace,
    nationality,
    motherTongue,
    domicileState,
    religion,
    castCategory,
    maharashtraKarnatakaBorderCandidate,
    castDescription,
    subCasteDescription,
    nonCreamyLayerCertificateAttached,
    hobby,
    passportNo,
    bloodGroup,
    physicallyHandicapped,
    studentMobNo,
    studentMail,
    parentMobNo,
    parentMail,
    perAddrDescr,
    perPlotNo,
    perStreetName,
    perStuAddr1,
    perStuAddr2,
    city,
    percellphone,
    perpincode,
    perresiphone,
    permailaddress,
    country,
    state,
    district,
    tahsil,
    correspondanceAddrDescr,
    correspondancePlotNo,
    correspondanceStreetName,
    correspondanceStuAddr1,
    correspondanceStuAddr2,
    correspondanceCity,
    correspondanceCellPhone,
    correspondancePincode,
    correspondanceResiPhone,
    correspondanceMailAddress,
    correspondanceCountry,
    correspondanceState,
    correspondanceDistrict,
    correspondanceTahsil,
    fatherDetails,
    fathersOccupation,
    parentsFirstName,
    parentsMiddleName,
    parentsLastName,
    guardianMobNo,
    guardianMailId,
    nameAsPerTc,
    casteAsPerTc,
    birthStatus,
    maritalStatus,
    panCardNo,
    passportExpiry,
    drivingLicNo,
    drivingLicValidTo,
    aadharCardNo,
    electionCardNo,
    motherMobNo,
    motherEmailId,
    parentIncome,
    photoUploaded,
    signUploaded,
    thumbUploaded,
    noOfDocumentsUploaded,
  });
  if (newStudent) {
    return newStudent;
  }
  throw new databaseError.DataEntryError("student");
}

export async function updateStudentById(id, data) {
  const updated = await Student.update({ _id: id }, data);
  if (updated) {
    return updated;
  }
  throw new databaseError.DataEntryError("activity");
}

export async function studentList(filter, limit, page) {
  const studentlist = await Student.read(filter, limit, page);
  return studentlist;
}

export async function deleteStudentById(id) {
  const deleted = await Student.remove({ _id: id });
  if (deleted) {
    return deleted;
  }
  throw new databaseError.DataDeleteError("activity");
}
