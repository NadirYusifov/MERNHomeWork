export default function AllClient() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
      <div>
        <h3 className="font-bold text-[30px] mb-8 mt-2">
          All client
        </h3>
      </div>
        <div className="overflow-scroll w-full">
          <table className="w-full border border-collapse">
            <tbody>
              <tr className="">
                <th className="border border-gray-500 px-6">Name and Surname</th>
                <th className="border border-gray-500 px-6">Contact</th>
                <th className="border border-gray-500 px-6">Notes</th>
                <th className="border border-gray-500 px-6">Called</th>
                <th className="border border-gray-500 px-6">Lead</th>
              </tr>
            </tbody>
            <tbody>
              <tr className="w-full">
                <td className="border border-gray-500 px-6">Nadir Yusifov</td>
                <td className="border border-gray-500 px-6">+994702772665</td>
                <td className="border border-gray-500 px-6">Front-End Development</td>
                <td className="border border-gray-500 px-6">Is Called</td>
                <td className="border border-gray-500 px-6">44</td>
              </tr>
              <tr>
                <td className="border border-gray-500 px-6">Nadir Yusifov</td>
                <td className="border border-gray-500 px-6">+994702772665</td>
                <td className="border border-gray-500 px-6">Front-End Development</td>
                <td className="border border-gray-500 px-6">Is Called</td>
                <td className="border border-gray-500 px-6">44</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
