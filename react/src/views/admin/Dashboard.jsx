

function Dashboard() {

  const Items = [
   
    { id: 2, text: 'Leads', count: 200  },
    { id: 3, text: 'Clients', count: 100 },
    { id: 4, text: 'conversion', count: 20 },
    { id: 5, text: 'retention', count: 8},
  ];

  const leads = {text: 'Leads', count:200}
  const clients = {text: 'Clients', count:100}

  

    return (
      <>
        
      
       
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">

              <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
               
                <h3 className="text-lg font-bold   text-gray-800 dark:text-gray-200">{leads.text}</h3>
                <p className="text-sm  text-gray-800 dark:text-gray-200">{leads.count}</p>
              </div>
              <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md ">
               
                <h3 className="text-lg font-bold  text-gray-800 dark:text-gray-200">{clients.text}</h3>
                <p className="text-sm  text-gray-800 dark:text-gray-200">{clients.count}</p>
              </div>
              <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md ">
                
                <h3 className="text-lg font-bold  text-gray-800 dark:text-gray-200">Card Title 3</h3>
                <p className="text-sm  text-gray-800 dark:text-gray-200">Description of Card 3</p>
              </div>
              <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md " >
               
                <h3 className="text-lg font-bold  text-gray-800 dark:text-gray-200">Card Title 4</h3>
                <p className="text-sm  text-gray-900 dark:text-gray-200">Description of Card 4</p>
              </div>
            </div>









      </>
    )
  }
  
  export default Dashboard;
  