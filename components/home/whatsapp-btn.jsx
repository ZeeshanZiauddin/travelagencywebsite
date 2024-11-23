/** @format */
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

const WhatsappBtn = () => {
  return (
    <div className="relitive">
      <div className="absolute right-14 bottom-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="bg-green-500 p-2 rounded-full shadow-lg">
              <Link href={"https://wa.me/<phone_number>"} target="_blank">
                <MessageCircleMore className="text-green-50 " />
              </Link>
            </TooltipTrigger>
            <TooltipContent className="bg-white text-black border shadow-md">
              <p>Chat With Our Agent Directly</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default WhatsappBtn;
