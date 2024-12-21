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
        className="max-w-48 rounded border py-1.5 pl-2 text-sm tracking-tight shadow transition-colors hover:border-zinc-300 focus:border-zinc-500 focus:outline-none"
      />
    </>
  );
}
