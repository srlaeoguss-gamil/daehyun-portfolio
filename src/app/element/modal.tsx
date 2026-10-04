import * as Dialog from '@radix-ui/react-dialog';
import './css/modal.scss';
interface ProjectData {
  label: string;
  value: string;
}
/*
interface ModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  title: string;
  // 💡 1. ?를 붙여서 '있을 수도 있고 없을 수도 있음'으로 정의합니다.
  details?: ProjectData[]; 
  // 💡 2. 배열이 없을 때 자유로운 태그를 받을 수 있도록 children을 열어둡니다.
  children?: React.ReactNode; 
}
  Readonly<ModalProps>
*/
export default function Modal({
  isOpen, 
  onClose, 
  title, 
  details, 
  children
  }: Readonly<{
    isOpen: boolean;
    onClose: (open: boolean) => void;
    title: string;
    // 💡 1. ?를 붙여서 '있을 수도 있고 없을 수도 있음'으로 정의합니다.
    details?: ProjectData[]; 
    // 💡 2. 배열이 없을 때 자유로운 태그를 받을 수 있도록 children을 열어둡니다.
    children?: React.ReactNode; 
  }>) {
  return (
  <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          
          <Dialog.Title>{title}</Dialog.Title>

          <div className="modal-body">
            {/* 💡 3. 조건부 렌더링: details 데이터가 있으면 리스트를 그리고, 없으면 children을 그립니다. */}
            {details && details.length > 0 ? (
              <ul className="modal-data-list">
                {details.map((item, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <strong>{item.label}: </strong>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>
            ) : (
              // details가 넘어오지 않았다면 태그 사이에 넣은 자유로운 내용을 출력합니다.
              children 
            )}
          </div>

          <Dialog.Close asChild>
            <button className="close-button">닫기</button>
          </Dialog.Close>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
