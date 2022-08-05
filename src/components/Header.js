/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Header() {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="https://flowbite.com" class="flex items-center">
          <img src="./logo.png" class="mr-3 h-6 sm:h-9" alt="Newscast Logo" />
        </a>
        <div class="flex items-center">
          <a href="#" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">Register</a>
          <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
      </div>
    </nav>
  )
}
