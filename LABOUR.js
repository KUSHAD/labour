class Labour{
    constructor(){
        this.index = 0;
        this.name = null;
        this.DOB = null;
        this.profession = null;
        this.homeDistrict = null;
        this.homeAddress = null;
        this.workingState = null;
        this.workingAdress = null;
        this.phone= null;
        this.complaint=null;
        this.govtIdType = null;
        this.IdNumber = null;
   }
   getCount(){
        var labourCountRef = database.ref('labourCount');
        labourCountRef.on("value",(data)=>{
            labourCount = data.val();
        })
   }
   updateCount(count){
    database.ref('/').update({
      labourCount: count
    });
  }
  update(){
    var labourIndex="Labours/labour"+this.index;
    database.ref(labourIndex).set({
        Name: this.name,
        DOB: this.DOB,
        Profession: this.profession,
        Home_District: this.homeDistrict,
        Home_Adress: this.homeAddress,
        Working_State_Or_UT: this.workingState,
        Working_State_Or_UT_Adress: this.workingAdress,
        Phone: this.phone,
        Complaint:this.complaint,
        GOVT_ID_Type: this.govtIdType,
        ID_Number: this.IdNumber
    });
}
}