"use client"
import Button from "@/components/Button";
import Header from "@/components/Header";
import { headerconfig } from "@/configs/headerconfig";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <Header
        msgList={headerconfig.msgList}
        imgLink={headerconfig.imgLink}
      ></Header>
      <Button btnText={"Begin Quest"} onClick={() => router.push("/quiz")}></Button>
    </div>
  );
}
