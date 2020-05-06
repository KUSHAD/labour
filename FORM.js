class Form{
    constructor() {
        this.header=createElement('h1');
        this.nLabel=createElement('h3');
        this.dobLabel=createElement('h3');
        this.pLabel=createElement('h3');
        this.sSLabel=createElement('h3');
        this.sSALabel=createElement('h3');
        this.dLabel=createElement('h3');
        this.aDLabel=createElement('h3');
        this.phLabel=createElement('h3');
        this.cLabel=createElement('h3');
        this.vHLabel=createElement('h3');
        this.vITLabel=createElement('h3');
        this.vINLabel=createElement('h3');
        this.greeting=createElement('h1');
        this.inst=createElement('h1');
        this.nInput=createInput();
        this.dobInput=createInput();
        this.pInput=createInput();
        this.sSAInput=createInput();
        this.aDInput=createInput();
        this.phInput=createInput();
        this.cSel=createSelect();
        this.cSel.option('NONE');
        this.cSel.option('NO RATION CARD');
        this.cSel.option('WRONG RATION CARD')
        this.cSel.option('DOESN\'NOT GET RATION PROPERLY');
        this.cSel.option('PROBLEM WITH KANYASREE');
        this.cSel.option('DOESN\'T HAVE JOB');
        this.cSel.option('FACTORY CLOSED');
        this.vITSel=createSelect();
        this.vITSel.option('AADHAR CARD');
        this.vITSel.option('RATION CARD');
        this.vITSel.option('VOTER CARD');
        this.sSSel=createSelect();
        this.sSSel.option('ANDAMAN & NICOBAR ISLANDS')
        this.sSSel.option('ANDHRA PRADESH');
        this.sSSel.option('ARUNACAHAL PRADESH');
        this.sSSel.option('ASSAM');
        this.sSSel.option('BIHAR')
        this.sSSel.option('CHANDIGARH');
        this.sSSel.option('CHATTISGARH');
        this.sSSel.option('DADRA & NAGAR HAVELI');
        this.sSSel.option('DAMAN & DIU');
        this.sSSel.option('DELHI');
        this.sSSel.option('GOA');
        this.sSSel.option('GUJARAT');
        this.sSSel.option('HARYANA');
        this.sSSel.option('HIMACHAL PRADESH');
        this.sSSel.option('JAMMU & KASHMIR');
        this.sSSel.option('JHARKHAND');
        this.sSSel.option('KARNATAKA');
        this.sSSel.option('KERALA');
        this.sSSel.option('LAKSHADWEEP ISLANDS');
        this.sSSel.option('MADHYA PRADESH');
        this.sSSel.option('MAHARASHTRA');
        this.sSSel.option('MANIPUR');
        this.sSSel.option('MEGHALAYA');
        this.sSSel.option('MIZORAM');
        this.sSSel.option('NAGALAND');
        this.sSSel.option('ORISSA');
        this.sSSel.option('PONDICHERRY');
        this.sSSel.option('PUNJAB');
        this.sSSel.option('RAJASTHAN');
        this.sSSel.option('SIKKIM');
        this.sSSel.option('TAMIL NADU');
        this.sSSel.option('TELANGANA');
        this.sSSel.option('TRIPURA');
        this.sSSel.option('UTTAR PRADESH');
        this.sSSel.option('UTTARAKHAND');
        this.dSel=createSelect();
        this.dSel.option('ALIPURDUAR');
        this.dSel.option('BANKURA');
        this.dSel.option('PASCHIM BARDHAMAN');
        this.dSel.option('PURBA BARDHAMAN');
        this.dSel.option('BIRBHUM');
        this.dSel.option('COOCH BEHAR');
        this.dSel.option('DARJEELING');
        this.dSel.option('UTTAR DINAJPUR');
        this.dSel.option('DAKSHIN DINAJPUR');
        this.dSel.option('HOOGHLY');
        this.dSel.option('HOWRAH');
        this.dSel.option('JALPAIGURI');
        this.dSel.option('JHARGRAM');
        this.dSel.option('KOLKATA');
        this.dSel.option('KALIMPONG');
        this.dSel.option('MALDA');
        this.dSel.option('PASCHIM MEDNIPUR');
        this.dSel.option('PURBA MEDNIPUR');
        this.dSel.option('MURSHIDABAD');
        this.dSel.option('NADIA');
        this.dSel.option('24 PGS NORTH');
        this.dSel.option('24 PGS SOUTH');
        this.dSel.option('PURULIA');
        this.vINInput=createInput();
        this.checkBox=createCheckbox("I AM TOTALLY SURE TO SUBMIT THIS FORM",false);
        this.button=createButton("SUBMIT");
   }
    display(){
        labour=new Labour();
        labour.index=labour.index+1;
        labour.updateCount(labour.index);
        this.header.html("LABOUR DETAILS FORM");
        this.header.position(windowWidth/2-150,windowHeight/20);
        this.nLabel.html("NAME:-");
        this.nLabel.position(windowWidth/2-350,windowHeight/7);
        this.nInput.position(windowWidth/2-25,windowHeight/7+20)
        this.dobLabel.html("DATE OF BIRTH:-");
        this.dobLabel.position(windowWidth/2-350,windowHeight/7+35);
        this.dobInput.position(windowWidth/2-25,windowHeight/7+35+20);
        this.pLabel.html("PROFFESSION:-");
        this.pLabel.position(windowWidth/2-350,windowHeight/7+70);
        this.pInput.position(windowWidth/2-25,windowHeight/7+70+20);
        this.dLabel.html("HOME DISTRICT(W.B.):-");
        this.dLabel.position(windowWidth/2-350,windowHeight/7+105);
        this.dSel.position(windowWidth/2-25,windowHeight/7+105+20);
        this.aDLabel.html("HOME ADDRESS(W.B.):-");
        this.aDLabel.position(windowWidth/2-350,windowHeight/7+140);
        this.aDInput.position(windowWidth/2-25,windowHeight/7+140+20);
        this.sSLabel.html("WORKING STATE(OR UT):-");
        this.sSLabel.position(windowWidth/2-350,windowHeight/7+175);
        this.sSSel.position(windowWidth/2-25,windowHeight/7+175+20);
        this.sSALabel.html("WORKING STATE(OR UT)ADDRESS:-");
        this.sSALabel.position(windowWidth/2-350,windowHeight/7+210);
        this.sSAInput.position(windowWidth/2-25,windowHeight/7+210+20);
        this.phLabel.html("PHONE NUMBER:-");
        this.phLabel.position(windowWidth/2-350,windowHeight/7+245);
        this.phInput.position(windowWidth/2-25,windowHeight/7+245+20);
        this.cLabel.html("COMPLAINT(IF ANY):-");
        this.cLabel.position(windowWidth/2-350,windowHeight/7+280);
        this.cSel.position(windowWidth/2-25,windowHeight/7+280+20);
        this.vHLabel.html("VERIFICATION:-");
        this.vHLabel.position(windowWidth/2-350,windowHeight/7+325);
        this.vITLabel.html("> GIVE YOUR GOVERNMENT VERIFICATION ID TYPE:-");
        this.vITLabel.position(windowWidth/2-300,windowHeight/7+360);
        this.vITSel.position(windowWidth/2+200,windowHeight/7+360+20);
        this.vINLabel.html("> GIVE YOUR ID NUMBER:-");
        this.vINLabel.position(windowWidth/2-300,windowHeight/7+395);
        this.vINInput.position(windowWidth/2+200,windowHeight/7+395+20);
        this.checkBox.position(windowWidth/2-400,windowHeight/7+500);
        this.button.position(windowWidth/2,windowHeight/7+525);
    }
    hide(){
        if(this.checkBox.checked()){
                this.greeting.html("YOU HAVE SUBMITTED YOUR FORM SUCCESSFULLY");
                this.inst.html("PLEASE REFRESH THE PAGE FOR YOUR NEXT ENTRY");
                this.greeting.position(windowWidth/3-100,windowHeight/7);
                this.inst.position(windowWidth/3-50,windowHeight/2);
                this.header.hide();
                this.nLabel.hide();
                this.dobLabel.hide();
                this.pLabel.hide();
                this.sSLabel.hide();
                this.sSALabel.hide();
                this.dLabel.hide();
                this.aDLabel.hide();
                this.phLabel.hide();
                this.cLabel.hide();
                this.vHLabel.hide();
                this.vITLabel.hide();
                this.vINLabel.hide();
                this.nInput.hide();
                this.dobInput.hide();
                this.pInput.hide();
                this.sSSel.hide();
                this.sSAInput.hide();
                this.dSel.hide();
                this.aDInput.hide();
                this.phInput.hide();
                this.cSel.hide();
                this.vITSel.hide();
                this.vINInput.hide();
                this.checkBox.hide();
                this.button.hide();
        }else{
            alert("PLEASE CHECK THE CHECKBOX AND THEN SUBMIT THE FORM");
        }
    }
    update(){
        var labourIndex="Labours/labour"+labour.index;
        console.log(labourIndex);
        database.ref(labourIndex).update({
            Name: this.nInput.value(),
            Age: this.dobInput.value(),
            Profession: this.pInput.value(),
            Home_District: this.dSel.value(),
            Home_Adress: this.aDInput.value(),
            Working_State_Or_UT: this.sSSel.value(),
            Working_State_Or_UT_Adress: this.sSAInput.value(),
            Phone: this.phInput.value(),
            Complaint:this.cSel.value(),
            GOVT_ID_Type: this.vITSel.value(),
            ID_Number: this.vINInput.value()
        });
    }
}