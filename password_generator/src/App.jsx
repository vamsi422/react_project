import { useState, useEffect, useCallback } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(true);
  const [specialChar, setSpecialChar] = useState(true);
  const [password, setPassword] = useState("choose your password");
  useEffect(() => {
    genPassword();
  }, [length, numbers, specialChar]);
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numbers) str += "0123456789";
  if (specialChar) str += "!@#$%^&*";
  let genPassword = useCallback(() => {
    let newPassword = "";
    let l = str.length;
    for (let i = 0; i < length; i++) {
      let randomNum = Math.random() * l;
      newPassword += str.charAt(randomNum);
    }
    setPassword(newPassword);
  }, [length, numbers, specialChar]);

  return (
    <div className="text-white flex justify-center">
      <div className="m-2 flex-col justify-between">
        <div className="font-serif text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg">
          PassWord Generator
        </div>
        <div>
          <input
            type="text"
            className="rounded-l-lg text-center p-1 mt-10 ml-4"
            placeholder={password}
            readOnly
          />
          <button
            onClick={() => genPassword(length)}
            className="bg-fuchsia-600 rounded-r-lg p-1"
            type="submit"
          >
            generate
          </button>
        </div>
        <div className="flex ml-2 mt-4 gap-6">
          <div>
            <input
              type="checkbox"
              defaultChecked={numbers}
              onChange={() => setNumbers((e) => !e)}
            />
            <label className="ml-2">add numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={specialChar}
              onChange={() => setSpecialChar((e) => !e)}
            />
            <label className="ml-2">add special char</label>
          </div>
        </div>
        <div className="flex-col mt-2 ml-6">
          <div>length of your password :- {length}</div>
          <input
            className=" cursor-pointer ml-8 mt-2"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            type="range"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
