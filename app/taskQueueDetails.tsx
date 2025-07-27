// app/taskQueueDetails.tsx

const TaskQueueDetails = () => {
  return (
    <div className="text-white space-y-6">
      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Client Features</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Unique Task ID & Redis-backed status registry</li>
          <li>Real-time result querying</li>
          <li>Emergency call simulator for load testing</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">Worker Features</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Kafka consumer groups for load balancing</li>
          <li>Heartbeat monitoring & smart retries</li>
          <li>Structured status updates</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-cyan-400">System Highlights</h3>
        <ul className="list-disc list-inside text-slate-200">
          <li>Exactly-once execution guarantee</li>
          <li>Redis-based low-latency result caching</li>
          <li>Autoscaling with dynamic load handling</li>
        </ul>
      </section>
    </div>
  );
};

export default TaskQueueDetails;