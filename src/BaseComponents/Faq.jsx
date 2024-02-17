import { useState } from "react";
import { BiCheckShield } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";


const UnitFaq = ({question}) => {
    const [faqstate, setfaqstate] = useState(false);

   return (
      <div>
        <div className="py-3 border-solid border-0 border-b-[1.5px] border-dark/5">
            <div className="flex items-center overflow-hidden w-full cursor-pointer mb-[3px]" onClick={() => setfaqstate(!faqstate)}>
                <p className="font-medium ">{question.title}</p>

                <span className="border-solid p-[3px] border-[1px] rounded-full border-dark/10"> 
                    {
                        faqstate?  <BiMinus /> :  <BiPlus />
                    }
                </span>
            </div>

            <p  onClick={() => setfaqstate(!faqstate)} className={`overflow-hidden transition-all duration-100 pl-1 ${faqstate ? 'overflow-normal text-wrap w-full bg-primary/5 border-solid border-left border-dark/20 border-0 py-1 border-l-[1px]': 'text-ellipsis text-nowrap max-w-full'}`}>{question.answer}</p>
        
        </div>

      </div>
   );
};

const GroupOfFaq = ({ category }) => {
   return (
      <div className="mt-3 px-1">
        <div className="flex justify-start items-start text-black w-fit gap-2 mb-1 ml-1">
            {category.icon}
            <p className="font-medium">{category.category}</p>
        </div>
         
        <div className="bg-light px-3 mb-4 rounded-xl shadow-sm">
            {category.questions.map((question, index) => (
               <div key={index+question}>
                    <UnitFaq question={question} />
               </div>
            ))}
        </div>
      </div>
   );
};

const Faq = () => {
   const faqs = [
      {
         category: "PIN CHAT",
         icon: <BiCheckShield />,
         questions: [
            {
               title: "Comment devenir vendeur sur AtounAfrica?...",
               answer:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est, laboriosam quae excepturi natus maxime soluta dignissimos! Quis sunt incidunt optioa.",
            },
            {
               title: "Comment devenir vendeur sur AtounAfrica?...",
               answer:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est.",
            },
            {
               title: "Comment devenir vendeur sur AtounAfrica?...",
               answer:
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est, laboriosam quae excepturi natus maxime soluta dignissimos! Quis sunt incidunt optio.",
            },
            {
               title: "Comment devenir vendeur sur AtounAfrica?...",
               answer:
                  "Lorem ipsum do.",
            },
         ],
      },

      {
        category: "PIN CHAT",
        icon: <BiCheckShield />,
        questions: [
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est, laboriosam quae excepturi natus maxime soluta dignissimos! Quis sunt incidunt optioa.",
           },
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est.",
           },
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est, laboriosam quae excepturi natus maxime soluta dignissimos! Quis sunt incidunt optio.",
           },
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum do.",
           },
        ],
      },

     {
        category: "PIN CHAT",
        icon: <BiCheckShield />,
        questions: [
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est, laboriosam quae excepturi natus maxime soluta dignissimos! Quis sunt incidunt optioa.",
           },
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est.",
           },
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio harum dicta optio modi tempora est, laboriosam quae excepturi natus maxime soluta dignissimos! Quis sunt incidunt optio.",
           },
           {
              title: "Comment devenir vendeur sur AtounAfrica?...",
              answer:
                 "Lorem ipsum do.",
           },
        ],
     },
   ];

   return (
      <div className="bg-dark/5 text-[14px] py-2 px-2">

         {faqs.map((faq, index) => (
            <div key={index + faq.category}>
               <GroupOfFaq category={faq}/>
            </div>
         ))}
      </div>
   );
};

export default Faq;
