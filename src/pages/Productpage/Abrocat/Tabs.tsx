type TabName = "Bundle" | "Exam Voucher" | "Practice Test" | "Courseware";

interface TabsProps {
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void;
}

const Tabs = ({ activeTab, setActiveTab }: TabsProps) => {
  const tabs: TabName[] = [
    "Bundle",
    "Exam Voucher",
    "Practice Test",
    "Courseware",
  ];

  return (
    <div className="flex justify-center border-b border-gray-200 gap-28 items-center ml-[120px] mr-[150px] pb-1 mt-[100px] mb-[-20px] px-14">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className="relative text-gray-700 text-lg pb-2 transition-all ease-linear cursor-pointer"
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute left-0 bottom-0 w-full mb-[-5px] h-[2px] bg-blue-600 rounded"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
