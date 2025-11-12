import { LucideNotebookPen } from "lucide-react";

interface InfoType {
  id: number;
  icon: React.ReactNode;
  quantity: number;
  title: string;
}

const Info: React.FC = () => {
  const information: InfoType[] = [
    { id: 1, icon: <LucideNotebookPen size={36} />, quantity: 50, title: "+ অভিজ্ঞ উস্তাদ " },
    { id: 2, icon: <LucideNotebookPen size={36} />, quantity: 20, title: "কর্মচারী" },
    { id: 3, icon: <LucideNotebookPen size={36} />, quantity: 300, title: "বালক" },
    { id: 4, icon: <LucideNotebookPen size={36} />, quantity: 100, title: "বালিকা" },
  ];

  return (
    <div 
      className="py-18"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 128, 0, 0.5), rgba(0, 128, 0, 0.5)), url("/bg.jpg")',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="flex items-center justify-center flex-wrap gap-20">
          {information.map((item) => (
            <div key={item.id} className="flex  flex-col items-center justify-center">
              <div
                className="bg-button w-26 h-26 flex hover:scale-110 transition-all duration-500 items-center cursor-pointer group justify-center text-white shadow-md hover:shadow-lg"
                style={{ borderRadius: "20px 20px 20px 0px" }}
              >
                
                {item.icon}
              </div>
              <h3 className="text-white text-2xl font-semibold mt-3 mb-2 drop-shadow-md">
                {item.quantity}
              </h3>
              <p className="text-xl text-white font-semibold drop-shadow-sm">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
