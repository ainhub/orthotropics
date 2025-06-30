import useOnclickOutside from "react-cool-onclickoutside";

interface VideoModalProps {
  closeModal: () => void;
  embedUrl: string;
}

const VideoModal = ({ closeModal, embedUrl }: VideoModalProps) => {
  const clickOutside = useOnclickOutside(() => {
    closeModal();
  });

  return (
    <div className="fixed inset-0 w-full h-full bg-brand-dark-400/80 px-6 z-50 cursor-pointer">
      <div
        ref={clickOutside}
        className="overflow-hidden rounded-xl shadow-2xl bg-white max-w-2xl mx-auto mt-40"
      >
        <iframe
          ref={clickOutside}
          className="w-full aspect-video border-0"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen={false}
        />
      </div>
    </div>
  );
};

export default VideoModal;
