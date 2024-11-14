import { useNavigate } from 'react-router-dom';

interface ClickableAvatarProps {
  photoURL: string;
  userId: string;
  displayName: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  showStatus?: boolean;
  status?: 'online' | 'offline';
  className?: string;
}

export default function ClickableAvatar({
  photoURL,
  userId,
  displayName,
  size = 'md',
  showStatus = false,
  status,
  className = ''
}: ClickableAvatarProps) {
  const navigate = useNavigate();

  const sizeClasses = {
    xs: 'w-8 h-8',
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-14 h-14'
  };

  const statusSizeClasses = {
    xs: 'w-2 h-2',
    sm: 'w-2.5 h-2.5',
    md: 'w-3 h-3',
    lg: 'w-3.5 h-3.5'
  };

  return (
    <div className="relative">
      <button
        onClick={() => navigate(`/profile/${userId}`)}
        className={`relative ${sizeClasses[size]} ${className}`}
      >
        <img
          src={photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random`}
          alt={displayName}
          className="w-full h-full rounded-full object-cover hover:opacity-90 transition-opacity"
        />
      </button>
      {showStatus && status && (
        <span 
          className={`absolute bottom-0 right-0 ${statusSizeClasses[size]} rounded-full border-2 theme-bg-primary ${
            status === 'online' ? 'bg-green-500' : 'bg-gray-500'
          }`} 
        />
      )}
    </div>
  );
} 