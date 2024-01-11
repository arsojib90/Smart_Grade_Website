import Avatar from "../assets/avatar.png";
import SerachBox from "./SearchBox";

export default function StudentsTable() {
  const class1 = [
    {
      id: 1,
      img: Avatar,
      name: "Abdul Kalam",
      score: "A+",
      percentage: "97%",
    },
    {
      id: 2,
      img: Avatar,
      name: "Selina Begum",
      score: "A-",
      percentage: "69%",
    },
    {
      id: 3,
      img: Avatar,
      name: "Imran Hussain",
      score: "B+",
      percentage: "85%",
    },
    {
      id: 4,
      img: Avatar,
      name: "Farida Akhtar",
      score: "A",
      percentage: "92%",
    },
    {
      id: 5,
      img: Avatar,
      name: "Mustafa Rahman",
      score: "B",
      percentage: "78%",
    },
    {
      id: 6,
      img: Avatar,
      name: "Aisha Khan",
      score: "A+",
      percentage: "96%",
    },
    {
      id: 7,
      img: Avatar,
      name: "Rahim Ali",
      score: "A-",
      percentage: "71%",
    },
    {
      id: 8,
      img: Avatar,
      name: "Sofia Ahmed",
      score: "B+",
      percentage: "87%",
    },
    {
      id: 9,
      img: Avatar,
      name: "Hasan Mahmud",
      score: "A",
      percentage: "93%",
    },
    {
      id: 10,
      img: Avatar,
      name: "Amina Islam",
      score: "B",
      percentage: "79%",
    },
    {
      id: 11,
      img: Avatar,
      name: "Jamal Khan",
      score: "A+",
      percentage: "98%",
    },
    {
      id: 12,
      img: Avatar,
      name: "Ayesha Begum",
      score: "A-",
      percentage: "68%",
    },
    {
      id: 13,
      img: Avatar,
      name: "Ehsan Ahmed",
      score: "B+",
      percentage: "86%",
    },
    {
      id: 14,
      img: Avatar,
      name: "Mina Hasan",
      score: "A",
      percentage: "94%",
    },
    {
      id: 15,
      img: Avatar,
      name: "Aliya Khan",
      score: "B",
      percentage: "77%",
    },
    {
      id: 16,
      img: Avatar,
      name: "Ibrahim Khan",
      score: "A+",
      percentage: "95%",
    },
    {
      id: 17,
      img: Avatar,
      name: "Rina Akhtar",
      score: "A-",
      percentage: "70%",
    },
    {
      id: 18,
      img: Avatar,
      name: "Chowdhury Bakr",
      score: "B+",
      percentage: "88%",
    },
    {
      id: 19,
      img: Avatar,
      name: "Jahanara Begum",
      score: "A",
      percentage: "91%",
    },
    {
      id: 20,
      img: Avatar,
      name: "Sharif Islam",
      score: "B",
      percentage: "80%",
    },
  ];
  const class2 = [
    {
      id: 1,
      img: Avatar,
      name: "Fatima Rahman",
      score: "A",
      percentage: "94%",
    },
    {
      id: 2,
      img: Avatar,
      name: "Rahman Ali",
      score: "B+",
      percentage: "88%",
    },
    {
      id: 3,
      img: Avatar,
      name: "Sara Khan",
      score: "A-",
      percentage: "73%",
    },
    {
      id: 4,
      img: Avatar,
      name: "Zakir Hussain",
      score: "B",
      percentage: "79%",
    },
    {
      id: 5,
      img: Avatar,
      name: "Nadia Akhtar",
      score: "A+",
      percentage: "97%",
    },
    {
      id: 6,
      img: Avatar,
      name: "Ahmed Hasan",
      score: "A-",
      percentage: "69%",
    },
    {
      id: 7,
      img: Avatar,
      name: "Nazia Khan",
      score: "B+",
      percentage: "85%",
    },
    {
      id: 8,
      img: Avatar,
      name: "Kamal Ahmed",
      score: "A",
      percentage: "92%",
    },
    {
      id: 9,
      img: Avatar,
      name: "Ayesha Ali",
      score: "B",
      percentage: "78%",
    },
    {
      id: 10,
      img: Avatar,
      name: "Imran Khan",
      score: "A+",
      percentage: "96%",
    },
    {
      id: 11,
      img: Avatar,
      name: "Farida Begum",
      score: "A-",
      percentage: "71%",
    },
    {
      id: 12,
      img: Avatar,
      name: "Ismail Ahmed",
      score: "B+",
      percentage: "87%",
    },
    {
      id: 13,
      img: Avatar,
      name: "Naima Khan",
      score: "A",
      percentage: "93%",
    },
    {
      id: 14,
      img: Avatar,
      name: "Sadiq Rahman",
      score: "B",
      percentage: "80%",
    },
    {
      id: 15,
      img: Avatar,
      name: "Amina Akhtar",
      score: "A+",
      percentage: "98%",
    },
    {
      id: 16,
      img: Avatar,
      name: "Jamil Hussain",
      score: "A-",
      percentage: "68%",
    },
    {
      id: 17,
      img: Avatar,
      name: "Zahra Begum",
      score: "B+",
      percentage: "86%",
    },
    {
      id: 18,
      img: Avatar,
      name: "Arif Khan",
      score: "A",
      percentage: "91%",
    },
    {
      id: 19,
      img: Avatar,
      name: "Sofia Rahman",
      score: "B",
      percentage: "77%",
    },
    {
      id: 20,
      img: Avatar,
      name: "Aryan Ali",
      score: "A+",
      percentage: "95%",
    },
  ];
  const class3 = [
    {
      id: 1,
      img: Avatar,
      name: "Sofia Rahman",
      score: "A",
      percentage: "92%",
    },
    {
      id: 2,
      img: Avatar,
      name: "Aryan Ali",
      score: "B+",
      percentage: "85%",
    },
    {
      id: 3,
      img: Avatar,
      name: "Nadia Akhtar",
      score: "A-",
      percentage: "70%",
    },
    {
      id: 4,
      img: Avatar,
      name: "Imran Khan",
      score: "B",
      percentage: "78%",
    },
    {
      id: 5,
      img: Avatar,
      name: "Fatima Rahman",
      score: "A+",
      percentage: "96%",
    },
    {
      id: 6,
      img: Avatar,
      name: "Kamal Ahmed",
      score: "A-",
      percentage: "68%",
    },
    {
      id: 7,
      img: Avatar,
      name: "Sara Khan",
      score: "B+",
      percentage: "87%",
    },
    {
      id: 8,
      img: Avatar,
      name: "Amina Akhtar",
      score: "A",
      percentage: "94%",
    },
    {
      id: 9,
      img: Avatar,
      name: "Ismail Ahmed",
      score: "B",
      percentage: "79%",
    },
    {
      id: 10,
      img: Avatar,
      name: "Zahra Begum",
      score: "A+",
      percentage: "98%",
    },
    {
      id: 11,
      img: Avatar,
      name: "Jamil Hussain",
      score: "A-",
      percentage: "71%",
    },
    {
      id: 12,
      img: Avatar,
      name: "Ayesha Ali",
      score: "B+",
      percentage: "86%",
    },
    {
      id: 13,
      img: Avatar,
      name: "Zakir Hussain",
      score: "A",
      percentage: "93%",
    },
    {
      id: 14,
      img: Avatar,
      name: "Naima Khan",
      score: "B",
      percentage: "77%",
    },
    {
      id: 15,
      img: Avatar,
      name: "Farida Begum",
      score: "A+",
      percentage: "95%",
    },
    {
      id: 16,
      img: Avatar,
      name: "Imran Hussain",
      score: "A-",
      percentage: "69%",
    },
    {
      id: 17,
      img: Avatar,
      name: "Sadiq Rahman",
      score: "B+",
      percentage: "88%",
    },
    {
      id: 18,
      img: Avatar,
      name: "Arif Khan",
      score: "A",
      percentage: "91%",
    },
    {
      id: 19,
      img: Avatar,
      name: "Nazia Khan",
      score: "B",
      percentage: "80%",
    },
    {
      id: 20,
      img: Avatar,
      name: "Amina Islam",
      score: "A+",
      percentage: "97%",
    },
  ];

  return (
    <div>
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            <SerachBox />
          </div>
          <div className="max-w-[848px] mx-auto overflow-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#FFFFFF0D]">
                  <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                    ID
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold text-left">
                    Name
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Scores
                  </th>
                  <th className="p-5 text-sm md:text-xl font-semibold">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    Class One
                  </td>
                </tr>
                {class1.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b hover:bg-[#2a3c45] border-[#7ECEB529]"
                  >
                    <td className="p-5 text-sm md:text-xl">{student.id}</td>
                    <td className="p-5 text-sm md:text-xl">
                      <div className="flex space-x-3 items-center">
                        <img
                          className="w-8 h-8"
                          src={`${student.img}`}
                          width="32"
                          height="32"
                          alt={student.name}
                        />

                        <span className="whitespace-nowrap">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.score}
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.percentage}
                    </td>
                  </tr>
                ))}

                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    Class Two
                  </td>
                </tr>
                {class2.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b hover:bg-[#2a3c45]  border-[#7ECEB529]"
                  >
                    <td className="p-5 text-sm md:text-xl">{student.id}</td>
                    <td className="p-5 text-sm md:text-xl">
                      <div className="flex space-x-3 items-center">
                        <img
                          className="w-8 h-8"
                          src={`${student.img}`}
                          width="32"
                          height="32"
                          alt={student.name}
                        />

                        <span className="whitespace-nowrap">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.score}
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.percentage}
                    </td>
                  </tr>
                ))}
                <tr className="bg-white/5">
                  <td className="p-5 text-sm md:text-xl" colSpan="4">
                    Class Three
                  </td>
                </tr>
                {class3.map((student) => (
                  <tr
                    key={student.id}
                    className="border-b hover:bg-[#2a3c45] border-[#7ECEB529]"
                  >
                    <td className="p-5 text-sm md:text-xl">{student.id}</td>
                    <td className="p-5 text-sm md:text-xl">
                      <div className="flex space-x-3 items-center">
                        <img
                          className="w-8 h-8"
                          src={`${student.img}`}
                          width="32"
                          height="32"
                          alt={student.name}
                        />

                        <span className="whitespace-nowrap">
                          {student.name}
                        </span>
                      </div>
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.score}
                    </td>
                    <td className="p-5 text-sm md:text-xl text-center">
                      {student.percentage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
