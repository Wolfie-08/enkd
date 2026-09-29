import { Composition, Still } from "remotion";
import { Crm } from "./Crm";
import { Dashboard } from "./Dashboard";
import { Flow } from "./Flow";
import { Inbox } from "./Inbox";
import { Poster } from "./Poster";

export const RemotionRoot = () => (
  <>
    <Still id="Crm" component={Crm} width={2400} height={1500} />
    {/* 2s @ 24fps; frame 47 is the settled still (dashboard.png) */}
    <Composition id="Dashboard" component={Dashboard} durationInFrames={48} fps={24} width={2400} height={1500} />
    <Still id="Flow" component={Flow} width={2400} height={1200} />
    <Still id="Inbox" component={Inbox} width={1200} height={2400} />
    <Still id="Poster" component={Poster} width={1920} height={1080} />
  </>
);
