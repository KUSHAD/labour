class BackEnd{
    constructor() {
        
    }
    async start(){
          labour = new Labour();
          var labourCountRef = await database.ref('labourCount').once("value");
          if(labourCountRef.exists()){
            labourCount = labourCountRef.val();
            labour.getCount();
          }
          form = new Form()
          form.display();
        }
}