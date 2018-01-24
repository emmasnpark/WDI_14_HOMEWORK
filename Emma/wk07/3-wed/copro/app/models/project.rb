class Project < ApplicationRecord
  mount_uploader :preview, PreviewUploader
  belongs_to :user
end
