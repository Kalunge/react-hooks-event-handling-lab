// Code Keypad Component Here

function Keypad() {
  const handleChange = () => {
    console.log('Entering password...');
  };
  return (
    <div>
      <input
        onChange={handleChange}
        type="password"
        placeholder="Enter Password"
      />
    </div>
  );
}

export default Keypad;
