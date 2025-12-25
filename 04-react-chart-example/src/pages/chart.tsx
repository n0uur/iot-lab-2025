import { Link } from "react-router";
import { TemperatureChart } from "../components/temp-chart";
import { Button } from "../components/ui/button";
import { ArrowLeftIcon } from "lucide-react";

export default function ChartPage() {
  return (
    <>
      <div className="bg-background text-foreground p-4">
        <main className="container mx-auto max-w-3xl w-full space-y-8">
          <div className="">
            <Link to={"/"}>
              <Button variant="outline">
                <ArrowLeftIcon className="w-4 h-4" />
                กลับ
              </Button>
            </Link>
          </div>

          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              ตารางอะไรสักอย่าง
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Just Example Data Chart
            </p>
          </div>

          <div>
            <TemperatureChart />
          </div>
        </main>
      </div>
    </>
  );
}
