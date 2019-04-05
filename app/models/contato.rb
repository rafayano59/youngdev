class Contato
  include ActiveModel::Model
  attr_accessor :name, :email, :phone, :servico, :message
  validates :name, :email, :phone, :servico, :message, presence: true
end