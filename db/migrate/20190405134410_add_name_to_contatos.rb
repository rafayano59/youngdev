class AddNameToContatos < ActiveRecord::Migration[5.2]
  def change
    add_column :contatos, :name, :string
  end
end
