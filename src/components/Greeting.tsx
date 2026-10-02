type GreetingProps = {
  name: string;
};

export function Greeting({ name }: GreetingProps) {
  return (
    <h1 className="font-display text-3xl font-extrabold tracking-tight text-soft sm:text-4xl">
      Good evening, {name}
    </h1>
  );
}
