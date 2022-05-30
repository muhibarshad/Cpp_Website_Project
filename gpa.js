function gpa() {
    let english = document.getElementById('english').value;
    let physics = document.getElementById('physics').value;
    let pakstudies = document.getElementById('pakstudies').value;
    let quran = document.getElementById('quran').value;
    let ict = document.getElementById('ict').value;
    let pf = document.getElementById('pf').value;
    let lab = document.getElementById('lab').value;
    let math = document.getElementById('math').value;
    let temp = math;
    let eng_value;
    let phy_value;
    let pak_value;
    let ict_value;
    let pf_value;
    let quran_value;
    let lab_value;
    let math_value;
    let credit_english;
    let credit_phy;
    let credit_pak;
    let credit_quran;
    let credit_ict;
    let credit_pf;
    let credit_lab;
    let credit_math;
    let total_value;
    let total_credit;
    let calulate;
    //   For english
    if (english >= 0 && english < 50) {
        eng_value = 0.0;
    } else if (english >= 50 && english < 55) {
        eng_value = 1.00;
    } else if (english >= 55 && english < 58) {
        eng_value = 1.70;
    } else if (english >= 58 && english < 61) {
        eng_value = 2.00;
    } else if (english >= 61 && english < 65) {
        eng_value = 2.30;
    } else if (english >= 65 && english < 70) {
        eng_value = 2.70;
    } else if (english >= 70 && english < 75) {
        eng_value = 3.00;
    } else if (english >= 75 && english < 80) {
        eng_value = 3.30;
    } else if (english >= 80 && english < 85) {
        eng_value = 3.70;
    } else if (english >= 85 && english <= 100) {
        eng_value = 4.00;
    }
    //    alert(eng_value);
    //For physics
    if (physics >= 0 && physics < 50) {
        phy_value = 0.0;
    } else if (physics >= 50 && physics < 55) {
        phy_value = 1.00;
    } else if (physics >= 55 && physics < 58) {
        phy_value = 1.70;
    } else if (physics >= 58 && physics < 61) {
        phy_value = 2.00;
    } else if (physics >= 61 && physics < 65) {
        phy_value = 2.30;
    } else if (physics >= 65 && physics < 70) {
        phy_value = 2.70;
    } else if (physics >= 70 && physics < 75) {
        phy_value = 3.00;
    } else if (physics >= 75 && physics < 80) {
        phy_value = 3.30;
    } else if (physics >= 80 && physics < 85) {
        phy_value = 3.70;
    } else if (physics >= 85 && physics <= 100) {
        phy_value = 4.00;
    }
    // alert(phy_value);
    // for PAk-studies
    if (pakstudies >= 0 && pakstudies < 50) {
        pak_value = 0.0;
    } else if (pakstudies >= 50 && pakstudies < 55) {
        pak_value = 1.00;
    } else if (pakstudies >= 55 && pakstudies < 58) {
        pak_value = 1.70;
    } else if (pakstudies >= 58 && pakstudies < 61) {
        pak_value = 2.00;
    } else if (pakstudies >= 61 && pakstudies < 65) {
        pak_value = 2.30;
    } else if (pakstudies >= 65 && pakstudies < 70) {
        pak_value = 2.70;
    } else if (pakstudies >= 70 && pakstudies < 75) {
        pak_value = 3.00;
    } else if (pakstudies >= 75 && pakstudies < 80) {
        pak_value = 3.30;
    } else if (pakstudies >= 80 && pakstudies < 85) {
        pak_value = 3.70;
    } else if (pakstudies >= 85 && pakstudies <= 100) {
        pak_value = 4.00;
    }
    // alert(pak_value);
    //For pak-studies
    if (quran >= 0 && quran < 50) {
        quran_value = 0.0;
    } else if (quran >= 50 && quran < 55) {
        quran_value = 1.00;
    } else if (quran >= 55 && quran < 58) {
        quran_value = 1.70;
    } else if (quran >= 58 && quran < 61) {
        quran_value = 2.00;
    } else if (quran >= 61 && quran < 65) {
        quran_value = 2.30;
    } else if (quran >= 65 && quran < 70) {
        quran_value = 2.70;
    } else if (quran >= 70 && quran < 75) {
        quran_value = 3.00;
    } else if (quran >= 75 && quran < 80) {
        quran_value = 3.30;
    } else if (quran >= 80 && quran < 85) {
        quran_value = 3.70;
    } else if (quran >= 85 && quran <= 100) {
        quran_value = 4.00;
    }
    // alert(quran_value);
    //For ict
    if (ict >= 0 && ict < 50) {
        ict_value = 0.0;
    } else if (ict >= 50 && ict < 55) {
        ict_value = 1.00;
    } else if (ict >= 55 && ict < 58) {
        ict_value = 1.70;
    } else if (ict >= 58 && ict < 61) {
        ict_value = 2.00;
    } else if (ict >= 61 && ict < 65) {
        ict_value = 2.30;
    } else if (ict >= 65 && ict < 70) {
        ict_value = 2.70;
    } else if (ict >= 70 && ict < 75) {
        ict_value = 3.00;
    } else if (ict >= 75 && ict < 80) {
        ict_value = 3.30;
    } else if (ict >= 80 && ict < 85) {
        ict_value = 3.70;
    } else if (ict >= 85 && ict <= 100) {
        ict_value = 4.00;
    }
    // alert(ict_value);
    //For Pf
    if (pf >= 0 && pf < 50) {
        pf_value = 0.0;
    } else if (pf >= 50 && pf < 55) {
        pf_value = 1.00;
    } else if (pf >= 55 && pf < 58) {
        pf_value = 1.70;
    } else if (pf >= 58 && pf < 61) {
        pf_value = 2.00;
    } else if (pf >= 61 && pf < 65) {
        pf_value = 2.30;
    } else if (pf >= 65 && pf < 70) {
        pf_value = 2.70;
    } else if (pf >= 70 && pf < 75) {
        pf_value = 3.00;
    } else if (pf >= 75 && pf < 80) {
        pf_value = 3.30;
    } else if (pf >= 80 && pf < 85) {
        pf_value = 3.70;
    } else if (pf >= 85 && pf <= 100) {
        pf_value = 4.00;
    }
    // alert(pf_value);
    //For Lab
    if (lab >= 0 && lab < 50) {
        lab_value = 0.0;
    } else if (lab >= 50 && lab < 55) {
        lab_value = 1.00;
    } else if (lab >= 55 && lab < 58) {
        lab_value = 1.70;
    } else if (lab >= 58 && lab < 61) {
        lab_value = 2.00;
    } else if (lab >= 61 && lab < 65) {
        lab_value = 2.30;
    } else if (lab >= 65 && lab < 70) {
        lab_value = 2.70;
    } else if (lab >= 70 && lab < 75) {
        lab_value = 3.00;
    } else if (lab >= 75 && lab < 80) {
        lab_value = 3.30;
    } else if (lab >= 80 && lab < 85) {
        lab_value = 3.70;
    } else if (lab >= 85 && lab <= 100) {
        lab_value = 4.00;
    }
    // alert(lab_value);
    //For math
    if (math >= 0 && math < 50) {
        math_value = 0.0;
    } else if (math >= 50 && math < 55) {
        math_value = 1.00;
    } else if (math >= 55 && math < 58) {
        math_value = 1.70;
    } else if (math >= 58 && math < 61) {
        math_value = 2.00;
    } else if (math >= 61 && math < 65) {
        math_value = 2.30;
    } else if (math >= 65 && math < 70) {
        math_value = 2.70;
    } else if (math >= 70 && math < 75) {
        math_value = 3.00;
    } else if (math >= 75 && math < 80) {
        math_value = 3.30;
    } else if (math >= 80 && math < 85) {
        math_value = 3.70;
    } else if (math >= 85 && math <= 100) {
        math_value = 4.00;
    }
    // alert(math_value);
    //Variables multiplication
    credit_english = 3 * (eng_value);
    credit_phy = 3 * phy_value;
    credit_pak = 2 * pak_value;
    credit_quran = 0.5 * quran_value;
    credit_ict = 3 * ict_value;
    credit_pf = 3 * pf_value;
    credit_lab = 1 * lab_value;
    credit_math = 3 * math_value;
    //Calculations
    total_value = (credit_english) + (credit_phy) + (credit_pak) + (credit_quran) + (credit_ict) + (credit_pf) + (credit_lab) + (credit_math);
    if (temp == 0) {
        total_credit = 3 + 3 + 2 + 0.5 + 3 + 3 + 1;
    } else {
        total_credit = 3 + 3 + 2 + 0.5 + 3 + 3 + 1 + 3;
    }
    calulate = total_value / total_credit;
    // alert(calulate);
    document.getElementById('display-gpa').value = calulate.toPrecision(2);
}