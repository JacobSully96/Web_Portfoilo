
function calculateCalorie(obj) {

    const age = obj.form.age.value;
    const gender = obj.form.gender.value;
    const bodyFat = obj.form.bodyFat.value;
    const height = obj.form.height.value;
    const weight = obj.form.weight.value;
    const activity = obj.form.activity.value;
    const unit = obj.form.unit.value;
    const heightUnit = obj.form.height_unit.value;
    const weightUnit = obj.form.weight_unit.value;

    // Calculating BMR
    BMR = Mifflin(gender, age, bodyFat, height, weight, heightUnit, weightUnit);

    let ret = parseFloat(BMR) * parseFloat(activity);
    if (unit === 'kilojoules') {
        ret = (ret * 4.1868);
    }

    document.querySelector(".ans_calculate").innerHTML =
        '<div class="container"><h4 class="text-center form-control my-3 fs-4">Maintenance Calorie Intake: <b>' + Math.ceil(ret) + ' </b>' + unit + ' per day </span></h4></div>';

    document.querySelector(".ans_calculate2").innerHTML =
        '<div class="container"><h4 class="text-center form-control my-3 fs-4">Surplus (weight gain) Calorie Intake: <b>' + (Math.ceil(ret) + 300) + ' </b>' + unit + ' per day </span></h4></div>';

    document.querySelector(".ans_calculate3").innerHTML =
        '<div class="container"><h4 class="text-center form-control my-3 fs-4">Deficit (weight loss) Calorie Intake: <b>' + (Math.ceil(ret) - 300) + ' </b>' + unit + ' per day </span></h4></div>';


    console.log('Age: ' + age);
    console.log('Gender: ' + gender);
    console.log('bodyFat: ' + bodyFat);
    console.log('height: ' + height);
    console.log('weight: ' + weight);
    console.log('activity: ' + activity);
    console.log('unit: ' + unit);
    console.log('height unit: ' + heightUnit);
    console.log('weight Unit: ' + weightUnit);
    console.log('BMR: ' + BMR);

}


// Myfitnesspal uses this formuka for calculating BMR

function Mifflin(gender, age, bodyFat, height, weight, heightUnit, weightUnit) {

    // BMR = (10 * weight) + (6.25 * height) - (5 * age) + 5;  //Default metric formula Male
    // BMR = (10 * weight) + (6.25 * height) - (5 * age) - 161;  //Default metric formula Female
    
    const inchToCM = height * 2.54;     // Convert inches to cm
    const lbsToKG = weight * 0.453592;  //Convert lbs to KG
    let genderConstant = "";            // Constant number at end of the formula

    if(gender == "Male"){
        genderConstant = 5;
    }else if (gender == "Female"){
        genderConstant = -161;
    }

    if (heightUnit == "Inches" && weightUnit == 'LBS') {
        BMR = (10 * lbsToKG) + (6.25 * inchToCM) - (5 * age) + genderConstant;
    } else if (heightUnit == "Inches") {
        BMR = (10 * weight) + (6.25 * inchToCM) - (5 * age) + genderConstant;
    } else if (weightUnit == "LBS") {
        BMR = (10 * lbsToKG) + (6.25 * height) - (5 * age) + genderConstant;
    } else {
        BMR = (10 * weight) + (6.25 * height) - (5 * age) + genderConstant;
    }

    return BMR;
}