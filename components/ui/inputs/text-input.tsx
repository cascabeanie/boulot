type TextInputProps = {
  name: string;
  placeholder: string;
  required?: boolean;
};

export default function TextInput({
  name,
  placeholder,
  required,
}: TextInputProps) {
  return (
    <>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        required={required}
        className="text-sm tracking-tight border rounded py-1.5 pl-2 max-w-48 transition-colors focus:outline-none focus:border-zinc-500 hover:border-zinc-300 shadow"
      />
    </>
  );
}
