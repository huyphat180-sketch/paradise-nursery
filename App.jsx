import React, { useState } from "react";

function App() {
const [showProductList, setShowProductList] = useState(false);

return ( <div className="background-image"> <h1>Welcome to Paradise Nursery</h1>

```
  <p>
    Beautiful plants for your home and office.
  </p>

  <button
    onClick={() => setShowProductList(true)}
  >
    Get Started
  </button>
</div>
```

);
}

export default App;


