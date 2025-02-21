function Counter() {
    this.count = 0;
    const intervalId = setInterval(() => {
      this.count++; 
      console.log(this.count);
      
      if (this.count === 5) {
        clearInterval(intervalId);  
      }
    }, 1000);
  }
  
  const counter = new Counter(); 
  