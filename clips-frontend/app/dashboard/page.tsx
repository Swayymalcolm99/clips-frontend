
import RevenueTrendCard from "@/app/components/RevenueTrendCard";
import DistributionCard from "@/app/components/DistributionCard";
import DashboardHeader from "../components/DashboardHeader";
import StatCardGroup from "@/component/Statcardgroup ";
import RecentProjects from "../components/recentProject";
import AutoScheduleToggle from "../components/AutoScheduleToggle";
import WalletConnect from "../components/WalletConnect";
import { HelpBanner } from "../components/HelpBanner";

const Dashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 pb-20 space-y-12">
      <DashboardHeader />

      <div className="space-y-6">
        {/* Bento Grid Container */}
        <div className="bento-grid">
          <StatCardGroup />
          <RevenueTrendCard />
          <DistributionCard />
        </div>

        {/* Recent Projects Section */}
        <RecentProjects />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Wallet Integration (#93) */}
          <WalletConnect />
          
          {/* Placeholder for other integrations or stats */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Support & Help CTA Banner (#94) */}
        <HelpBanner />
      </div>

      {/* Auto-Schedule Floating Toggle (#86) */}
      <AutoScheduleToggle />
    </div>
  );
};

export default Dashboard;