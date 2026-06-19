import { ShoppingCart } from "lucide-react";

function App() {
  return (
    <>
      <header className="flex justify-between p-4  text-white bg-[#7E33E0]">
        <div>
          <span className="mr-3">mer@gamil.com</span>
          <span>+977 9840234234</span>
        </div>
        <div className="flex">
          <span>User</span>
          <ShoppingCart />
        </div>
      </header>
      <div>App component</div>
    </>
  );
}

export default App;
