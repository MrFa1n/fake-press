import { Modal } from "@/shared/ui/Modal/Modal";

interface HeaderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeaderModal = ({ isOpen, onClose }: HeaderModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>О проекте</Modal.Header>
      <Modal.Body>
        Voluptatem ipsum praesentium repellendus sed quia. Beatae nulla modi ex
        reiciendis illo at. Commodi consequuntur dignissimos. In exercitationem
        tempore modi consequuntur reiciendis. Iste occaecati omnis temporibus
        cum dolorem nihil. Qui neque iure rem aut soluta dolorum.
      </Modal.Body>
    </Modal>
  );
};
