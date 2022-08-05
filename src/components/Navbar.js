/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Navbar() {
  return (
    <nav class="bg-gray-50 dark:bg-gray-700">
      <div class="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
        <div class="flex items-center">
          <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">International</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Sports</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Opinion</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Business</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Entertainment</a>
            </li>
            <li>
              <a href="#" class="text-gray-900 dark:text-white hover:underline">Lifestyle</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
