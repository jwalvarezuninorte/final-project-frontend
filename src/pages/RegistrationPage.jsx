import { PrimaryButton } from "../components/base/PrimaryButton";

export default function RegistrationPage() {
  return (
    <div className="h-screen flex flex-col justify-center space-y-8 px-[8%] sm:px-[26%] md:px-[30%] xl:px-[36%]">
      <div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Crear nueva cuenta
        </h2>
      </div>
      <div className="flex flex-col space-y-2">
        <input
          id="full-name"
          name="fullname"
          type="text"
          autoComplete="text"
          required
          className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Full Name"
        />

        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Email address"
        />

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Password"
        />
      </div>

      <div>
        <PrimaryButton label="Iniciar sesión" />
      </div>

      <p className="mt-2 text-center text-sm text-gray-600">
        ¿Ya tienes una cuenta?{" "}
        <a
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        ></a>
      </p>
    </div>
  );
}
