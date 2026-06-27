export default function Logo({ className = "text-2xl", appName = "HR" }) {
  const gradientClass = 
    appName === 'HR' ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#4F46E5] to-[#3730A3]' : 
    appName === 'CRM' ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#C2410C]' : 
    appName === 'ATS' ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#9333ea] to-[#7e22ce]' :
    appName === 'News' ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#3b82f6] to-[#2563eb]' :
    'bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9]';

  return (
    <span className={`font-black tracking-tight text-slate-900 flex items-center ${className}`}>
      TalentUP
      {appName && (
        <span className={`${gradientClass} ml-2 font-extrabold`}>
          {appName}
        </span>
      )}
    </span>
  );
}
