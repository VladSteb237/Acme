export function Header() {
  return (
    <header className="h-16 border-b bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-x-8">
        <a href="/" className="font-bold text-2xl text-black">
          Acme
        </a>
        <nav className="flex items-center gap-6">
          <a href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="/docs" className="text-gray-600 hover:text-gray-900">
            Docs
          </a>
          <a href="/pricing" className="text-gray-600 hover:text-gray-900">
            Pricing
          </a>
          <a href="/setting" className="text-gray-600 hover:text-gray-900">
            Settings
          </a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <a
          href="/dashboard"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Dashboard
        </a>
      </div>
    </header>
  );
}
// export function Header() {
//   return (
//     <header className="h-16 border-b bg-white flex items-center ">
//       <a href="/" className="font-extrabold text-2xl dark:text-black">
//         Acme
//       </a>

//       <nav className="flex items-center text-xl mr-12 font-medium">
//         <div className="gap-x-6">
//           <a href="/" className="text-gray-600 hover:text-black transition">
//             Home
//           </a>
//         </div>
//         <div className="ml-4">
//           <a href="/docs" className="text-gray-600 hover:text-black transition">
//             Docs
//           </a>
//         </div>

//         <a
//           href="/pricing"
//           className="text-gray-600 hover:text-black transition">
//           Pricing
//         </a>
//         <a
//           href="/setting"
//           className="text-gray-600 hover:text-black transition">
//           Settings
//         </a>
//         <a
//           href="/dashboard"
//           className="text-gray-600 hover:text-black transition">
//           Dashboard
//         </a>
//       </nav>

//       {/* <a
//         href="/dashboard"
//         className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//         Dashboard
//       </a> */}
//     </header>
//   );
// }
